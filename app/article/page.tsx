import {notFound} from 'next/navigation'
import LiveStamp from '../LiveStamp';

type Props = {
    searchParams? : Article
}

export default function page({searchParams}: Props) {
  if(searchParams && Object.entries(searchParams).length === 0 || !searchParams){
    return notFound()
  }
  const article:Article=searchParams;
  return (
    <article>
        <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>
            {article.image && 
                <img 
                    src={article.image} 
                    alt={article.title}  
                    className="h-56 w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
                />
            }
            <div className='px-10'>
                <h1 className='headerTitle px-0 no-underline pb-2'> {article.title} </h1>
                <div className='flex divide-x-2 space-x-2'>
                        <h2 className='font-bold'>Par :  {article.author} </h2>
                        <h2 className='font-bold pl-4'> {article.source} </h2>
                        <p className='pl-4'> <LiveStamp time={article.published_at}/> </p>
                </div>
                <p className='pt-4'> {article.description} </p>
            </div>
        </section>
    </article>
  )
}