
import DisplayCards from './components/Display_Cards'
import Button from './components/Button'
import ContactForm from './components/ContactForm'
export default function Home() {

 const data_image = '/brain.jpg' 
 const data_text = 'hello'
 const data_detailed_link = 'https://google.com'

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>hello world</h1>
        <DisplayCards data_image={data_image} data_text={data_text} data_detailed_link={data_detailed_link} />
        <Button button_link='https://google.com' customPaddingClass='py-[178px] px-[36px]' >Hello world</Button>
        <ContactForm />
      </main>
    </div>
  );
}
