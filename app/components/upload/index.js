import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState, useEffect, useRef } from 'react'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function InputFileUpload({onChange, file=null}) {
    const [currentFile, setCurrentFile] = useState(file)
    const fileInput = useRef(null)
    useEffect(() => {
        if (file !== currentFile) {
            setCurrentFile(file)
        }
    }, [file])

    const getBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setCurrentFile(reader.result)
            onChange(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Загрузить изображение
            <VisuallyHiddenInput type="file" onChange={e => {
                const file = e.target.files[0]
                getBase64(file)
            }} />
        </Button>
    );
}
