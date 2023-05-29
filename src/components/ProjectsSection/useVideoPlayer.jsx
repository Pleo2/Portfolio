import {useEffect, useState} from 'react'

export default function useVideoPlayer({videoRef}) {
    const [video, setvideo] = useState(null)
    const [play, setPlay] = useState(false)
    useEffect(() => {
        setvideo(videoRef)
    }, [])

    useEffect(() => {
        if (play) {
            video?.current?.play()
        }
        if (!play) {
            video?.current?.pause()
        }
    }, [play, setPlay])

    return {
        setPlay,
    }
}
