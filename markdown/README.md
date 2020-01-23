# Basic / Useful Markdown Reference
![Markdown logo](images/markdown-logo.png)
- [Useful Markdown Links](#useful-markdown-links)
- [Headers and Lines](#headers-and-lines)
- [Basic text](#basic-text)
- [Source code](#source-code)
- [Links and Images](#links-and-images)
- [Lists](#lists)
- [Tables](#tables)
- [HTML Tags](#html-tags)

Markdown is a fairly readable plain-text format that can be easily rendered as HTML. On GitHub if the file has an .MD extension it happens automatically, README.md is automatically displayed in any folder.

**NOTE: This document appears to be doubled up**: each section is repeated, first the Markdown rendered as HTML, then the raw Markdown code.
Not all Markdown is covered, just what I find useful. And may be GitHub specific for GFM (GitHub Flavoured Markdown), because where else are you using Markdown? If there's more than one way of doing something I've probably picked what I feel makes most sense.

## Useful Markdown Links

* Quick Reference: <https://commonmark.org/help/>
* Longer Reference: <https://www.markdownguide.org/basic-syntax/>
* Cheatsheet with examples: <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
* One page PDF Cheatsheet: <https://packetlife.net/media/library/16/Markdown.pdf>
* Online Markdown editor:<https://dillinger.io/>
* Interactive tutorial: <https://commonmark.org/help/tutorial/>

[Visual Studio Code](https://code.visualstudio.com/Docs/languages/markdown) with the [Markdown  All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension is a good Markdown editor, it has syntax highlighting and HTML Preview mode with `Ctrl+Shift+V`, and side-by-side real-time Preview using `Ctrl+K V`. There's also other Markdown extensions and spellcheckers for VSCode.

## Headers and Lines

# Header1, is the LARGEST HEADER
## Header2, is not as Large <!-- omit in toc -->
### Header3, is is small <!-- omit in toc -->
#### Header4, is pretty small <!-- omit in toc -->

Headers are created with 1 or more # symbols. There are actually 6 levels of headers, all the way down to ######.
Headers also implicitly create an Anchor for a link (with spaces as dashes, so "A Header" becomes "a-header") which you can link to as #a-header in this document. Such as:  
This link goes to the ['Links and Images'](#links-and-images) below.

A faint **horizontal rule/line** will appear after Header1 or Header2, you can also create darker lines with at least 3 dashes or asterisks:

--------
or
********

**The above created using:**  
Note: "\<!-- omit in toc -->" was used after the Header examples above to prevent them from showing up in the auto-generated Table of Contents, not shown below.
```markdown
# Header1, is the LARGEST HEADER
## Header2, is not as Large
### Header3, is is small
#### Header4, is pretty small

Headers are created with 1 or more # symbols. There are actually 6 levels of headers, all the way down to ######.
Headers also implicitly create an Anchor for a link (with spaces as dashes, so "A Header" becomes "a-header") which you can link to as #a-header in this document. Such as:  
This link goes to the ['Links and Images'](#links-and-images) below.

A faint **horizontal rule/line** will appear after Header1 or Header2, you can also create darker lines with at least 3 dashes or asterisks:

--------
or
********
```

## Basic text

Plain text is just plain text.
But line breaks are IGNORED (this will be on the same line as the previous line). This can be handy to keep text looking neat in an
editor but have it flow properly in the browser.
To have an actual line break end a line with **2 spaces** (ie. '  ') ->  
Or a **backslash**, which is more visible but less common -> \
This is the last line of this block of text. A paragraph is a collection of lines separated by an empty blank line, which will render as a blank line too:

**Bold text**			Has 2 asterisks/stars on either side  
_Italic text_			Has 1 underscore on either side (or 1 *asterisk*)   
~~Strike text~~			Strike through text has 2 tildes on either side  
end of line  \			Starts a new line (OR end with 2 spaces, '  ')  
some `command`			Use backticks to indicate a "command" or some code in-line   
\*escaped chars\*		Use backslash to escape a Markdown character
> Quoted text			Block Quotes or Offsets text with a vertical bar  

The TABs above in the raw text _won't_ show in the HTML view, they'll just be a single space.
In _some cases_ special characters need to be encoded, such as:  
The ampersand & as &amp;  
The less than < and greater than > signs as &lt; and &gt;  
Likewise you can use &nbsp; to add multiple spaces [or &ensp; for 2 spaces and &emsp; for 4 spaces]. But often this encoding isn't needed.  
Or almost any <b>HTML</b> tags.

You can combine them:
> **It is _very_ important to use the right `command` in the right place**, okay?

**The above created using:**
```markdown
Plain text is just plain text.
But line breaks are IGNORED (this will be on the same line as the previous line). This can be handy to keep text looking neat in an
editor but have it flow properly in the browser.
To have an actual line break end a line with **2 spaces** (ie. '  ') ->  
Or a **backslash**, which is more visible but less common -> \
This is the last line of this block of text. A paragraph is a collection of lines separated by an empty blank line, which will render as a blank line too:

**Bold text**			Has 2 asterisks/stars on either side  
_Italic text_			Has 1 underscore on either side (or 1 *asterisk*)   
~~Strike text~~			Strike through text has 2 tildes on either side  
end of line  \			Starts a new line (OR end with 2 spaces, '  ')  
some `command`			Use backticks to indicate a "command" or some code in-line   
\*escaped chars\*		Use backslash to escape a Markdown character
> Quoted text			Block Quotes or Offsets text with a vertical bar  

The TABs above in the raw text _won't_ show in the HTML view, they'll just be a single space.
In _some cases_ special characters need to be encoded, such as:  
The ampersand & as &amp;  
The less than < and greater than > signs as &lt; and &gt;  
Likewise you can use &nbsp; to add multiple spaces [or &ensp; for 2 spaces and &emsp; for 4 spaces]. But often this encoding isn't needed.  
Or almost any <b>HTML</b> tags.

You can combine them:
> **It is _very_ important to use the right `command` in the right place**, okay?
```

## Source code

Source code, commands, variables, etc can be included inline with the `backtick` and it will standout in the text (font and background will be different).  

```
You can also {
	embed a block of code;
	between 3 ``` characters;
	Or if using raw code, like <b>tag</b> which will be raw, including final characters like: \
	Without the ``` you would need to intent code with 4 spaces ("    "), which is how the raw example made;
}
```

And on GitHub you can specify the language after ``` to get syntax highlighting, as in:
```javascript
if (isJavaScript) {
	return true;	// But tabs are 8 characters :(
}
```
Valid languages include: **batch, console, csharp, csv, go, html, javascript, json, markdown, powershell, python, shell, sql, typescript, vb, xml**. And many others.

**The above created using:**

    Source code, commands, variables, etc can be included inline with the `backtick` and it will standout in the text (font and background will be different).  

    ```
    You can also {
        embed a block of code;
        between 3 ``` characters;
        Or if using raw code, like <b>tag</b> which will be raw, including final characters like: \
        Without the ``` you would need to intent code with 4 spaces ("    "), which how the raw example is made;
    }
    ```

    And on GitHub you can specify the language after ``` to get syntax highlighting, as in:
    ```javascript
    if (isJavaScript) {
        return true;	// But tabs are 8 characters :(
    }
    ```
    Valid languages include: **batch, console, csharp, csv, go, html, javascript, json, markdown, powershell, python, shell, sql, typescript, vb, xml**. And many others.


## Links and Images

**Links:**  
[Link text](http://www.domain.com/page.htm)			A Link to http://www.domain.com/page.htm  
https://www.google.com								Will automatically become a link to Google  
<https://github.com>								Will also become a link to GitHub, is quick and more official.

So you can write a link to <https://www.google.ca> or you can suggest someone [click here](https://www.google.ca/) to get to Google, depending on what you want.

[Back to Basic Text section](#basic-text)			Link to an Anchor from a #HEADER on the same page  

**Images:**  
![Optional Image Alt Text](images/example-image.png)			Embed an image, starts with ! (JPG, PNG, and maybe GIF)  

Can also use `../dir/file.md` references as well for relative links, within a repo, or `images/file.png`, etc.

**The above created using:**
```markdown
**Links:**  
[Link text](http://www.domain.com/page.htm)			A Link to http://www.domain.com/page.htm  
https://www.google.com								Will automatically become a link to Google  
<https://github.com>								Will also become a link to GitHub, is quick and more official.

So you can write a link to <https://www.google.ca> or you can suggest someone [click here](https://www.google.ca/) to get to Google, depending on what you want.

[Back to Basic Text section](#basic-text)			Link to an Anchor from a #HEADER on the same page  

**Images:**  
![Optional Image Alt Text](images/example-image.png)			Embed an image, starts with ! (JPG, PNG, and maybe GIF)  

Can also use `../dir/file.md` references as well for relative links, within a repo, or `images/file.png`, etc.
```

## Lists

**Numbered Lists:**
1. First item  
    Continued text as part of an item has 4 spaces  
    Add whatever is needed as part of 1st item.  
    BUT remember to end previous lines with 2 spaces "  ", including "First Item"
2. Second item, could use 1) and 2) if preferred
   1. Sub items need to align with the start of the text above it.
1. Third Item, actual numbers don't matter [MD will auto number]

**Bullet Points:**
* Point #1
* Point #2
* Point #3, or you can use a dash: -
  - With 2 spaces you can have sub points
  * Second sub point
    * A sub-sub point

**Task lists** work on GitHub:
- [x] This is a complete item
- [ ] This is an incomplete item

**The above created using:**
```markdown
**Numbered Lists:**
1. First item  
    Continued text as part of an item has 4 spaces  
    Add whatever is needed as part of 1st item.  
    BUT remember to end previous lines with 2 spaces "  ", including "First Item"
2. Second item, could use 1) and 2) if preferred
   1. Sub items need to align with the start of the text above it.
1. Third Item, actual numbers don't matter [MD will auto number]

**Bullet Points:**
* Point #1
* Point #2
* Point #3, or you can use a dash: -
  - With 2 spaces you can have sub points
  * Second sub point
    * A sub-sub point

**Task lists** work on GitHub:
- [x] This is a complete item
- [ ] This is an incomplete item
```

## Tables

Make tables by separating columns with a pipe (|) and the Header row from the data rows with at least dashes (---).
It doesn't all need to line up.

Header1 | Header2 | Header3
--------|-------|---
cell 1 | Cell 2 | cell 3
small cell | 2 | 3
much longer cell | second cell here | and the third one

**The above created using:**
```markdown
Make tables by separating columns with a pipe (|) and the Header row from the data rows with at least dashes (---).
It doesn't all need to line up.

Header1 | Header2 | Header3
--------|-------|---
cell 1 | Cell 2 | cell 3
small cell | 2 | 3
much longer cell | second cell here | and the third one
```

## HTML Tags

You can use HTML tags such as <b>Bold</b> or start a new line:
<br>
And then add a <i>horizontal line</i>:
<hr>
etc.

**The above created using:**
```markdown
You can use HTML tags such as <b>Bold</b> or start a new line:
<br>
And then add a <i>horizontal line</i>:
<hr>
etc.
```
