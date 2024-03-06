

type FileUploaderProps = {
    imageUrl: string,
    onFieldChange: (value: string) => void
    setFiles: (files: any[]) => void
}


const FileUploader = ({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) => {
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader