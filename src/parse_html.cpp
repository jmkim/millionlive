#include "gumbo.h"

#include <iostream>
#include <fstream>
#include <cstdlib>
#include <cctype>

static std::string
trim_string(const std::string & str)
{
    std::string                         out = "";
    std::string::const_iterator         start;
    std::string::const_reverse_iterator stop;

    for(start = str.begin(); start != str.end() && std::isspace(*start); ++start);
    if(start == str.end())
        goto jump_return;

    for(stop = str.rbegin(); stop != str.rend() && std::isspace(*stop); ++stop);
    while(start != stop.base())
        out.push_back(*(start++));

jump_return:
    return out;
}

static void
search_for_forms(GumboNode * node)
{
    if(node->type != GUMBO_NODE_ELEMENT)
        return;

    GumboVector *   attributes  = &node->v.element.attributes;
    GumboVector *   children    = &node->v.element.children;
    GumboNode *     text        = static_cast<GumboNode *>(children->data[0]);

    switch(node->v.element.tag)
    {
    case GUMBO_TAG_FORM:
        std::cout << "FORM_START\n";
        std::cout << node->v.element.tag << " ";
        for(unsigned int i = 0; i < attributes->length; ++i)
        {
            GumboAttribute * attr = static_cast<GumboAttribute *>(attributes->data[i]);
            std::cout << attr->name << "['" << attr->value << "'] ";
        }
        std::cout << "\n";

        for(unsigned int i = 0; i < children->length; ++i)
            search_for_forms(static_cast<GumboNode *>(children->data[i]));

        std::cout << "FORM_END\n";
        break;

    case GUMBO_TAG_A:
    case GUMBO_TAG_INPUT:
    case GUMBO_TAG_BUTTON:
        std::cout << node->v.element.tag << " ";
        for(unsigned int i = 0; i < attributes->length; ++i)
        {
            GumboAttribute * attr = static_cast<GumboAttribute *>(attributes->data[i]);
            std::cout << attr->name << "['" << attr->value << "'] ";
        }

        if(text != nullptr && text->type == GUMBO_NODE_TEXT)
            std::cout << "text" << "['" << trim_string(text->v.text.text) << "'] ";

        std::cout << "\n";
        break;

    default:
        for(unsigned int i = 0; i < children->length; ++i)
            search_for_forms(static_cast<GumboNode *>(children->data[i]));
    }
}

int
main(const int argc, const char * const argv[])
{
    if(argc != 2)
    {
        std::cout << argv[0] << " <html filename>\n";
        exit(EXIT_FAILURE);
    }

    const char * filename = argv[1];

    std::ifstream fin(filename, std::ios::in | std::ios::binary);
    if(! fin)
    {
        std::cout << "File " << filename << " not found!\n";
        exit(EXIT_FAILURE);
    }

    std::string contents;
    fin.seekg(0, std::ios::end);
    contents.resize(fin.tellg());
    fin.seekg(0, std::ios::beg);
    fin.read(&contents[0], contents.size());
    fin.close();

    GumboOutput * output = gumbo_parse(contents.data());
    search_for_forms(output->root);
    gumbo_destroy_output(&kGumboDefaultOptions, output);

    return 0;
}
