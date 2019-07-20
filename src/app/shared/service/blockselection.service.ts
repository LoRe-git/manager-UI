import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Branch } from '../model/branch.model';

@Injectable()
export class BlockSelectionService{
    hostelID: string = 'pmh';
    selectedBLockId: number;
    branches: Branch[];
    constructor(private httpService: HttpService){
    }
    setSelectedBlock(block_id: number){
        this.selectedBLockId = block_id;
    }


    getAllBranches(hId: string): Branch[]{
        if(!(typeof this.branches !== 'undefined' && this.branches.length > 0)){
            this.getBranchesByHid(hId);        
        }
        return this.branches;
    }

    getBranchesByHid(hostelId: string): Branch[] | null{
        
        this.httpService.getBranches(hostelId).subscribe(
            (resposeData: Branch[]) => {
                console.log(resposeData);
                this.branches = resposeData;
            },
            error => {
                console.log(error);
            }
        );
        return this.branches;
    }
}