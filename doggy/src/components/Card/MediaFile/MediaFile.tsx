interface MediaFileProps {
    url: string;
}

export default function MediaFile(props: MediaFileProps) {
    function getFileType(url: string){
        const extention = url.split('.').pop()?.toLowerCase();
        if (!extention) return null;
        if (['jpg', 'png', 'jpeg', 'gif'].includes(extention)) return 'image';
        if (['mp4', 'webm', 'ogg'].includes(extention)) return 'video';
        return null;
    } 

    const fileType = getFileType(props.url);

    if (!fileType) {
        return <div>Something went wrong</div>;
    }
    if (fileType === 'image'){
        return <img src={props.url} alt='doggy' className='media-item' />
    }
    if (fileType === 'video'){
        return (
            <video controls className='media-item'>
                <source src={props.url} type={`video/${props.url.split('.').pop()}`}/>
                Your browser does not support the video tag.
            </video>
        )
    }
    return null;
}