import { useState } from "react";
import axios from "axios";
import './Blog.css';

interface NewBlogProps {
    className?: string;
    children?: React.ReactNode;
    userid: number;
}

interface BlogData {
    title: string;
    description: string;
    image: string;
    user_id: number;
}

export const NewBlog = ({ userid, className = "", children = null }: NewBlogProps) => {
    const [blogData, setBlogData] = useState<BlogData>({
        title: '',
        description: '',
        image: '',
        user_id: userid,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBlogData({
            ...blogData,
            [event.target.name]: event.target.value,
        });
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = (event.target.files as FileList)?.[0];
        const formData = new FormData();
        formData.append('image', file);

        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/upload/`, formData, {
            withCredentials: true,
        });

        setBlogData({
            ...blogData,
            image: response.data.url,
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await axios.post(`http://localhost:3000/api/createpost`, blogData, {
            withCredentials: true,
        });
        console.log(response.data);
    };

    return (
        <div className={`text-center ${className}`}>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={blogData.title} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={blogData.description} onChange={handleChange} />
                </label>
                <label>
                    Image:
                    <input type="file" name="image" onChange={handleImageUpload} />
                </label>
                <button type="submit">Create</button>
            </form>
            {children}
        </div>
    );
};