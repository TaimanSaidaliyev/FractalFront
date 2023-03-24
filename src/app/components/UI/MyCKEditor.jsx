import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@doracoder/ckeditor5-custom-build/build/ckeditor'
import { BACK_HOST } from '../../API/APISettings';
import './css/reset.css';

function MyCKEditor(props) {
    const custom_config = {
        extraPlugins: [MyCustomUploadAdapterPlugin],
        allowedContent: 'p b i; a[!href] table',
        image: {
            toolbar: [
                'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                '|',
                'imageResize',
                '|',
                'imageTextAlternative'
            ],
            styles: [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
            resizeOptions: [
                {
                    name: 'imageResize:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'imageResize:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'imageResize:75',
                    label: '75%',
                    value: '75'
                }
            ],
        },
        toolbar: {
            items: [
                'fontSize',
                'alignment',
                'bold',
                'italic',
                'underline',
                'highlight',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'removeFormat',
                'strikethrough',
                'horizontalLine',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'mediaEmbed'
            ]
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        language: 'en'
    }

    return (
        <div className="yui3-cssreset">
            <CKEditor
                required
                editor={ClassicEditor}
                config={custom_config}
                data={props.value}
                onChange={( event, editor) => {
                    props.onChange(editor.getData())
                } }
            />
        </div>
    )
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return uploadAdapter(loader)
    }
}

function uploadAdapter(loader){
    return {
        upload: () => {
            return new Promise((resolve, reject) => {
                const body = new FormData()
                loader.file.then((file) =>{
                    body.append("image", file)
                    fetch(BACK_HOST + `/api/auth/upload_image/`, {
                        method: 'post',
                        body: body
                    })
                    .then((res => res.json()))
                    .then(((res) => {
                        resolve({default: res})
                        console.log(res)
                    }))
                    .catch((err) => {
                        reject(err)
                    })
                })
            })
        }
    }
}
export default MyCKEditor