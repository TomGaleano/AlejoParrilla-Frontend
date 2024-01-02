import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Blog.css';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}

interface BlogData {
    id: number;
    title: string;
    description: string;
    image: string;
    user_id: number;
    user: User;
}

interface ApiResponse {
    data: BlogData;
}

interface BlogProps {
    id: string;
    className?: string;
    children?: React.ReactNode;
}

export const Blog = ({ id, className = "", children = null }: BlogProps) => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const getBlog = async () => {
            const response = await axios.get<ApiResponse>(`${process.env.REACT_APP_BACKEND_URL}/api/detailpost/${id}`, {
                withCredentials: true,
            });
            setBlog(response.data);
        }
        getBlog();
    }, [id]);

    const handleDelete = async () => {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/deletepost/${id}`, {
            withCredentials: true,
        });
        navigate("/");
    }

    return (
        <div className={`container ${className}`}>
            <div className="row">
                <div className="col-md-12">
                    <article className="cta">
                        <img src={blog?.data.image} alt={blog?.data.title} />
                        <div className="cta__text-column">
                            <h2>{blog?.data.title}</h2>
                            <p>{blog?.data.description}</p>
                            <p>Autor: {blog?.data.user.first_name} {blog?.data.user.last_name}</p>
                            <a href="/home/" className="btn btn-danger" onClick={async (event) => {
                                event.preventDefault();
                                await handleDelete();
                            }}>Borrar</a>
                            <a href="#">Editar</a>
                        </div>
                    </article>
                    {children}
                </div>
            </div>
        </div>
    );
}