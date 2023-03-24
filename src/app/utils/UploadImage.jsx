import { useState } from 'react';


export const UploadImage = (props) => {
    const [selectedImage, setSelectedImage] = useState()
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
          props.uploadImage(e.target.files[0])
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (
        <div>
            {selectedImage ? (
                <div class="card card-flush h-xl-100">
                    <div class="d-block overlay">
                        <div className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded mb-7' style={{backgroundImage: `url(${URL.createObjectURL(selectedImage)})`, height: '300px'}}>
                            <span class="float-end btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                title="Remove avatar" onClick={removeSelectedImage}>
                                    <i class="bi bi-x fs-2"></i>
                            </span>
                        </div>
                    </div>
                </div>
                )
                :<input accept="image/*" type="file" className='form-control' onChange={imageChange} />
            }
        </div>
    )
}
