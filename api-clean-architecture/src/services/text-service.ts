import textStorage from '../storage/text-storage';



interface TextData {
    title: string;
    author: string;
    content: string; 
    status: string;
}

interface Text extends TextData {
    id: string;
    created_at: string;
}

export default {
    createText: ({title, author, content, status}: TextData): Text => {


        return newText;
    }, 

    getAllTexts: (): Text[] => {
        return TextStorage.getAll();
    }
}