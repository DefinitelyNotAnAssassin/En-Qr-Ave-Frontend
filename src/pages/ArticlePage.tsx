'use client'

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Image = ({ src, alt, width, height, className }) => ( 
    <img src={src} alt={alt} width={width} height={height} className={className} />
);

export default function ArticlePage() {
    const relatedArticles = [
        { title: "Related Article 1", image: "https://placehold.co/400x300", alt: "Related Article 1" },
        { title: "Related Article 2", image: "https://placehold.co/400x300", alt: "Related Article 2" },
        { title: "Related Article 3", image: "https://placehold.co/400x300", alt: "Related Article 3" },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-12">
                <article className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Article or post title
                    </h1>
                    <p className="text-base sm:text-lg mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc sit amet tortor fermentum ultricies. Sed auctor, libero et tincidunt 
                    </p>

                    <div className="mt-8">
                        <Image 
                            src="https://placehold.co/1200x600" 
                            width={1200} 
                            height={600} 
                            className="w-full h-auto object-cover rounded" 
                            alt="Article main image" 
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-center">
                        <p className="text-base sm:text-lg mt-8 w-full md:w-3/4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam, veniam voluptates nobis in ea, distinctio, aliquam voluptatibus eveniet mollitia aliquid eos suscipit repellendus totam natus veritatis? Obcaecati, veritatis ab.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                        <Image 
                            src="https://placehold.co/480x480" 
                            width={480} 
                            height={480} 
                            className="rounded object-cover w-full sm:w-1/2" 
                            alt="Author 1" 
                        />
                        <Image 
                            src="https://placehold.co/480x480" 
                            width={480} 
                            height={480} 
                            className="rounded object-cover w-full sm:w-1/2" 
                            alt="Author 2" 
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-center">
                        <p className="text-base sm:text-lg mt-8 w-full md:w-3/4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam, veniam voluptates nobis in ea, distinctio, aliquam voluptatibus eveniet mollitia aliquid eos suscipit repellendus totam natus veritatis? Obcaecati, veritatis ab.
                        </p>
                    </div>
                </article>

                <section className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedArticles.map((article, index) => (
                            <Card key={index} className="overflow-hidden">
                                <CardHeader className="p-0">
                                    <Image 
                                        src={article.image} 
                                        width={400} 
                                        height={300} 
                                        alt={article.alt}
                                        className="w-full h-48 object-cover"
                                    />
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg">{article.title}</CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

