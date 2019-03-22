export class Block{
    public block_name: string;
    public block_roomsCount: number;
    public block_id: number;
    constructor(block_name: string, rooms: number, id: number){
        this.block_name = block_name;
        this.block_roomsCount = rooms;
        this.block_id = id;
    }
}