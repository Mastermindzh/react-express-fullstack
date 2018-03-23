import sys
import os
from recommonmark.parser import CommonMarkParser
from recommonmark.transform import AutoStructify

# -- General configuration ------------------------------------------------

project = u'React-sane-starter'
copyright = u'2018, Rick van Lieshout'
author = u'Rick van Lieshout'
html_logo = "_static/logo.png"
version = u'1.0.0'

# If true, "Created using Sphinx" is shown in the HTML footer. Default is True.
html_show_sphinx = True

# -- Other configurations ------------------------------------------------

language = None

# If true, `todo` and `todoList` produce output, else they produce nothing.
todo_include_todos = True

templates_path = ['_templates']

source_parsers = {
    '.md': CommonMarkParser,
}

source_suffix = ['.rst','.md']
master_doc = 'index'

# Add folters to exclude (ex: source/ignored)
exclude_patterns = []

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']


# -- app-setup-hooks ------------------------------------------------

def setup(app):
    app.add_config_value('recommonmark_config', {
        'auto_toc_tree_section': 'Contents',
        'enable_eval_rst': True,
        'enable_auto_doc_ref': True,
    }, True)
    app.add_transform(AutoStructify)