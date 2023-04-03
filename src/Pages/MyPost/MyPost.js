import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../Services/Api';
import "./mypost.scss";

const MyPost = () => {

    const [onePost, setOnePost] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await API.getOnePost({ id });

            if (response.isSuccess) {
                setOnePost(response.data);
            }
        }
        fetchPost();
    }, [])

    return (

        <div className='myPost'>
            <div className="mypost-wrap">
                <div className="mypost-container">
                    <div className="mypost-cnt-left">
                        <div className="left-wrap">

                            <div className="img-cnt1">
                                <img src={onePost.picture || 'https://ik.imagekit.io/dexo68yudb/WhatsApp_Image_2023-03-23_at_4.36.14_PM__1_.jpeg?updatedAt=1679570703951'} alt="" />
                            </div>
                            <div className="img-cnt2">
                                <img src={onePost.picture || 'https://ik.imagekit.io/dexo68yudb/WhatsApp_Image_2023-03-23_at_4.36.14_PM__1_.jpeg?updatedAt=1679570703951'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mypost-cnt-right">
                        <div className="details">
                            <ul className="cnt-det">
                                <li>{onePost.category || "Post Not Found"}</li>
                                <li>{onePost.title || "Not Found"}</li>
                                <li>{onePost.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis ipsum sunt quasi exercitationem quae ipsa labore possimus esse officiis vel porro fugit, aspernatur sed sit perspiciatis enim. Obcaecati, aliquid?Ullam tenetur temporibus, numquam quod doloribus velit necessitatibus facere tempora, autem, ab excepturi rem. Doloremque explicabo ducimus soluta voluptatem aliquam quia, numquam dolore labore provident consequatur autem omnis, qui eaque!Eos recusandae inventore maxime laborum natus sed cum asperiores modi laudantium. Necessitatibus quam praesentium quasi eos, vitae aliquid sint eveniet eaque nobis ipsam numquam rem! Molestias pariatur laudantium ratione accusantium?Minima earum laborum sed molestias, optio repudiandae, quod, tempora animi nobis ipsam porro accusantium sapiente provident totam corporis cupiditate voluptatem. Esse doloremque voluptates quas? Nesciunt nihil explicabo at ipsum ullam?Consequuntur sunt sed aut possimus assumenda, optio tenetur praesentium corrupti consequatur recusandae aperiam fugiat voluptates illo distinctio atque libero, culpa voluptatum obcaecati, laboriosam repellendus iure exercitationem nisi cum ad? Velit?Dolorum placeat, ad facere error vero commodi, facilis possimus dolorem, eum distinctio cum incidunt totam expedita repellat esse eligendi aperiam sunt beatae omnis praesentium asperiores ex illo ducimus. Laudantium, excepturiEa eaque exercitationem repellendus praesentium magni voluptates ducimus ipsam qui illo laudantium porro repudiandae molestiae, maxime ipsa error reprehenderit quibusdam unde similique dolorem. Iste aut molestias doloremque. Voluptatum, eum consequuntur.Libero eveniet natus ea numquam optio, a aperiam animi incidunt aliquid modi fuga cum iusto veritatis quasi et omnis est fugit similique quaerat fugiat? Corrupti ea ab temporibus reiciendis incidunt."}</li>
                                <li>Author: {onePost.username || "Anonymous"}</li>
                                <li>Date: {onePost.createdAt || "xx/xx/xxxx"}</li>
                                <li><Link to={'/posts'}>Back</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default MyPost;



