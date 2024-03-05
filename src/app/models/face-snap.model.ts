export class FaceSnap {
    constructor(public title: string,
        public id: number,
        public description: string,
        public imageUrl: string,
        public createdDate: Date,
        public snaps: number, 
        public location?: string) {
    }
}