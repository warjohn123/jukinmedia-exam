import Axios from "axios";
import { VideoModel } from "../models/video.model";

export class VideoApi {

    private url = 'api/public/videos';

    // https://funk-qa.jukinmedia.com/api/public/videos?offset=0&max=12&sort=latest&theWire=true&trending=false
    getVideos(offset: number): Promise<VideoModel[]> {
        console.log('axios offset', offset);
        return Axios.get(this.url, {
            params: {
                offset: offset,
                max: 12,
                sort: 'latest',
                theWire: true,
                trending: false
            }
        }).then(
            (response) => {
                console.log('response,', response);
                return response.data.result as VideoModel[]
            }
        );
    }

}