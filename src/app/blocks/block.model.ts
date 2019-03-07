export class Block{
    public block_name: string;
    public block_roomsCount: number;

    constructor(block_name: string, rooms: number){
        this.block_name = block_name;
        this.block_roomsCount = rooms;
    }
}