import React from 'react'
import { Editor } from 'tinymce'
import { Controller } from 'react-hook-form'



function RTE({name, control, label, defaultValue=""}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
                name={name || content}
                control={control}
                render={({field: {onChange}})=>(
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "link",
                                "lists",
                                "table",
                                "media",
                                "code",
                                "help",
                                "wordcount",
                                "preview",
                                "searchreplace",
                                "directionality",
                                "visualblocks",
                                "visualchars",
                                "fullscreen",
                                "insertdatetime",
                                "nonbreaking",
                                "template",
                                "paste",
                                "textpattern",
                                "imagetools",
                                "toc",
                                "advlist",
                                "autolink",
                                "autoresize",
                                "autosave",
                                "charmap",
                                "colorpicker",
                                "contextmenu",
                                "emoticons",
                                "hr",
                                "pagebreak",
                                "print",
                                "quickbars",
                                "save",
                                "spellchecker",
                                "tabfocus",
                                "table",
                                "textcolor",
                                "textpattern",
                                "anchor",

                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

export default RTE
