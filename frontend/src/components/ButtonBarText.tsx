
interface Props {
    title: string;
    description: string;
}

export default function ButtonBarText(props: Props) {
    return (
        <>
            <div className="h-[100px] border-slate-900 border-[0.5px] rounded-lg pl-5 pt-4">
                <div className="font-light text-sm lg:text-lg xl:text-xl relative">
                    <div className="justify-center mb-2">
                        {props.title}
                        <svg className="absolute inline right-6 h-6 w-6 text-slate-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="13" y1="18" x2="19" y2="12" />  <line x1="13" y1="6" x2="19" y2="12" /></svg>
                    </div>
                    <div className="font-light text-xs xl:text-sm pr-16">
                        {props.description}
                    </div>
                </div>
            </div>
        </>
    );
};