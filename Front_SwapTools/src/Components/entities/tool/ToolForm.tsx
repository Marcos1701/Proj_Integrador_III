import axios from "axios";
import { array, InferType, object, string } from "yup";
import { ToolCategory } from "../category/tool/CategoryList";
import { useState } from "react";

export interface InsertToolForm {
	// Nome da ferramenta.
	name: string;
	// Descrição da ferramenta.
	description: string;
	// ID do usuário que está oferecendo a ferramenta.
	userId: string;
	// ID da categoria da ferramenta.
	categoriesId: string[];
}


export const InsertToolSchema = object().shape(
    {
        name: string().required(),
        description: string().required(),
        userId: string().required(),
        categoriesId: array().of(string()).required()
    }
)

export type InsertToolFormValues = InferType<typeof InsertToolSchema>;


async function fetchToolCategories() {
    try {
        const response = await axios.get<ToolCategory[]>("/categories")
        return response.data;
    } catch (error) {
        console.log(error); 
        return [];
    }
}


async function insertTool(tool: InsertToolFormValues) {
    try {
        InsertToolSchema.validateSync(tool);
        const response = await axios.post("/tools", tool);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const [values, setValues] = useState<InsertToolFormValues>({
    name: "",
    description: "",
    userId: "",
    categoriesId: []
});



export const ToolForm = async () => {
    const categories = await fetchToolCategories();
    const onSubmit = async (values: InsertToolFormValues) => {
        const tool = await insertTool(values);
        if (tool) {
            alert("Ferramenta inserida com sucesso!");
        } else {
            alert("Falha ao inserir ferramenta!");
        }
    }

    return (
        <form
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                try {
                    await onSubmit(values);
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            <div>
                <h1>Ferramenta</h1>
            </div>
            <div>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nome"
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    value={values.name}
                />
            </div>
            <div>
                <label htmlFor="description">Descrição</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descrição"
                    onChange={(e) => setValues({ ...values, description: e.target.value })}
                    value={values.description}
                />
            </div>
            <div>
                <label htmlFor="categories">Categorias</label>
                <select
                    id="categories"
                    name="categories"
                    onChange={(e) => setValues({ ...values, categoriesId: [e.target.value] })}
                    value={values.categoriesId[0]}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Salvar</button>
        </form>
    )

}