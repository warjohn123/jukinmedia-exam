export interface VideoModel {
    additionalNotes: any;
    agreementType: string;
    brightCoveVideoId: number;
    category: VideoModelCategory;
    durationStr: string;
    entryId: number;
    favorites: number;
    footageFormat: string;
    hasMultipleAngles: boolean;
    id: number;
    imgUrl: string;
    isPublicDownloadAvailable: boolean;
    jmId: string;
    lastUpdated: string;
    licenseeShowTitles: any[];
    likes: number;
    linkable: boolean;
    location: any;
    originalPublishingDate: string;
    platform: string;
    platformVideoId: string;
    popularity: VideoPopularity;
    priority: string;
    publishEditedFootage: boolean;
    publishSiteType: string;
    publishingDescription: string;
    seq: number;
    signedDate: string;
    status: string;
    storyNotes: any;
    title: string;
    videoTags: VideoTag[];
    videoUrl: string;
    views: number;
    websiteNotes: any;
    when: string;
    where: any;
    who: string;
    wirePlatform: string;
    wirePlatformVideoId: string;
    wireVideoUrl: string;
}

export interface VideoModelCategory {
    id: number;
    name: string;
}

export interface VideoPopularity {
    status: string;
}

export interface VideoTag {
    name: string;
    subtype: any;
    tagId: number;
}


export enum VideoListDisplayType {
    list = "list",
    grid = "grid"
}