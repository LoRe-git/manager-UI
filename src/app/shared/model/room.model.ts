export class Room {
    constructor(
        public roomId: string,
        public roomNo: string,
        public branchId: string,
        public cost: number,
        public capacity: number
    ) {}
}