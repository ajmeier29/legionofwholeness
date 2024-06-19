
interface Props {
    title: string;
    description: string;
}

export default function ButtonBarText(props: Props) {
    return (
        <>
            <div className="w-1/3 h-[100px] border-slate-900 border-[0.5px] rounded-lg pl-5 pt-4">
                <div className="font-light text-xl relative">
                    <div className="justify-center">
                        {props.title}
                        <svg className="absolute inline right-6 h-6 w-6 text-slate-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="13" y1="18" x2="19" y2="12" />  <line x1="13" y1="6" x2="19" y2="12" /></svg>
                    </div>
                    <div className="font-light text-sm pr-16">
                        {props.description}
                    </div>
                </div>
            </div>
        </>
    );
};