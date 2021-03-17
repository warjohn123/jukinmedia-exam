import Axios from "axios";
import { VideoModel } from "../models/video.model";

export class VideoApi {

    // https://funk-qa.jukinmedia.com/api/public/videos?offset=0&max=12&sort=latest&theWire=true&trending=false
    getVideos(): Promise<VideoModel[]> {
        return Axios.get("public/videos", {
            params: {
                offset: 0,
                max: 12,
                sort: 'latest',
                theWire: true,
                trending: false
            }
        }).then(
            (response) => response.data as VideoModel[]
        );
    }

}