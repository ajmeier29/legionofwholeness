import { format } from "date-fns";


export default function GetFormattedDate(date: string = "") {
    return format(new Date(date), 'MMMM do yyyy');
}