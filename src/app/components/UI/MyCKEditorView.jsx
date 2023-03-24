import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@doracoder/ckeditor5-custom-build/build/ckeditor'
import { BACK_HOST } from '../../API/APISettings';
import './css/reset.css';

function MyCKEditorView(props) {
    return (
        <div className="yui3-cssreset">
            <CKEditor
                editor={ClassicEditor}
                data={props.value}
                // onChange={( event, editor) => {
                //     props.onChange(editor.getData())
                // } }
            />
        </div>
    )
}

export default MyCKEditorView