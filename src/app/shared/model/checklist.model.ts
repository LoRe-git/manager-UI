export class CheckList {
    constructor(
        private checklist_id: number,
        private bid: string,
        private checklist_date: Date = new Date(),
        private incharge_name: string,
        private opening_balance: number,
        private admissions: number,
        private vacancies: number,
        private notice_periods: number,
        private complaints: string,
        private collections_cash: number,
        private collections_ac: number,
        private collections_pending: number,
        private closing_balance: number,
        private water_tankers: number,
        private misc: string
    ){}
}