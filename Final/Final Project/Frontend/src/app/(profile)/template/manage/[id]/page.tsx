import { TemplateUpdate } from "@/components/Template/TemplateUpdate";

export default function Edit({params}:{params: {id: string}}){
    return(
        <TemplateUpdate id={params.id}/>
    );
}