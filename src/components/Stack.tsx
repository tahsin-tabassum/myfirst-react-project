
interface Technology {
    id: number;
    name: string;
    category: string; 
    description: string;
    icon: string;
rating : number;
difficulty: string;
badge: string;
}

interface TechnoProps {
    stack: Technology[];
    onAdd: (technology: Technology) => void;

}
