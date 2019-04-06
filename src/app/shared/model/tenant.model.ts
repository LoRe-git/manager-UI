export class Tenant {
    constructor(
        public t_id: number, 
        public t_name: string, 
        public t_address: string, 
        public t_phone: number, 
        public t_roomno: string,
        public t_govId: string,
        public t_amount: number,
        public t_email: string,
        public t_dob: Date,
        public t_doj: Date,
        public block_id: number
        ){
    }
}