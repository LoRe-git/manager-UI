export class BlockSelectionService{
    selectedBLockId: number;
    setSelectedBlock(block_id: number){
        this.selectedBLockId = block_id;
    }
}