import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div className='bg-gray-200 h-screen w-screen flex justify-center items-center'>
        <div className='shadow w-[1440px] h-[1139px] bg-white flex flex-col justify-between items-center p-[64px] box-border'>
          <div className='flex flex-col gap-[24px] items-center w-[610px]'>
            <h1 className='text-[64px] font-nunito text-center font-bold '>Discover the beauty around the world</h1>
            <p className='text-[26px] font-nunito text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
            <button className='text-[18px] font-nunito bg-[#252525] text-white rounded-2xl w-[158px] h-[54px]'>Explore</button>
          </div>
          <div className='flex flex-wrap justify-center gap-[20px] [&_*]:rounded-[20px] [&_*]:w-[316px] [&_*]:h-[288px]'>
            <div className=''>
              <img src='https://s3-alpha-sig.figma.com/img/9e44/8c96/2338e4a5960798f615ab671454185651?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRGEaQkB15vFQ2WmWA4pCw-~HBO5sNACbtIXoyLuNb2Km0B5aDSiVeBXRvxRHSwgjGKKQW1vw7I6KiaO-e687FGEERd0DedJLG0ki81w6MvcM9KlYZpy3ze4Qqe33zNdOBzC8gWAGzIOiOKu2VBmbyFbUnY7mQuQuG7hy9BuXwG3VwsAS1tpE8OKz9xjd1dQJ5v-gsL6hHPs-6V0AKTxnTfTQ2X9Wg3N5PsN3bqlR8y3jNSKNJvjRiXukvyZqdtYkLi2zVwxI1~IdCmeff~zsduUmr8Zvd8sulNP6TXr9prk1Fn8pBHGl3BtAYsMo8yyw-VLr7UI63BI~rRP4UQrmQ__' alt="" />
            </div>
            <div className=''>
              <img src='https://s3-alpha-sig.figma.com/img/9e44/8c96/2338e4a5960798f615ab671454185651?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRGEaQkB15vFQ2WmWA4pCw-~HBO5sNACbtIXoyLuNb2Km0B5aDSiVeBXRvxRHSwgjGKKQW1vw7I6KiaO-e687FGEERd0DedJLG0ki81w6MvcM9KlYZpy3ze4Qqe33zNdOBzC8gWAGzIOiOKu2VBmbyFbUnY7mQuQuG7hy9BuXwG3VwsAS1tpE8OKz9xjd1dQJ5v-gsL6hHPs-6V0AKTxnTfTQ2X9Wg3N5PsN3bqlR8y3jNSKNJvjRiXukvyZqdtYkLi2zVwxI1~IdCmeff~zsduUmr8Zvd8sulNP6TXr9prk1Fn8pBHGl3BtAYsMo8yyw-VLr7UI63BI~rRP4UQrmQ__' alt="" />
            </div>
            <div className=''>
              <img src='https://s3-alpha-sig.figma.com/img/9e44/8c96/2338e4a5960798f615ab671454185651?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRGEaQkB15vFQ2WmWA4pCw-~HBO5sNACbtIXoyLuNb2Km0B5aDSiVeBXRvxRHSwgjGKKQW1vw7I6KiaO-e687FGEERd0DedJLG0ki81w6MvcM9KlYZpy3ze4Qqe33zNdOBzC8gWAGzIOiOKu2VBmbyFbUnY7mQuQuG7hy9BuXwG3VwsAS1tpE8OKz9xjd1dQJ5v-gsL6hHPs-6V0AKTxnTfTQ2X9Wg3N5PsN3bqlR8y3jNSKNJvjRiXukvyZqdtYkLi2zVwxI1~IdCmeff~zsduUmr8Zvd8sulNP6TXr9prk1Fn8pBHGl3BtAYsMo8yyw-VLr7UI63BI~rRP4UQrmQ__' alt="" />
            </div>
            <div className=''>
              <img src='https://s3-alpha-sig.figma.com/img/9e44/8c96/2338e4a5960798f615ab671454185651?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRGEaQkB15vFQ2WmWA4pCw-~HBO5sNACbtIXoyLuNb2Km0B5aDSiVeBXRvxRHSwgjGKKQW1vw7I6KiaO-e687FGEERd0DedJLG0ki81w6MvcM9KlYZpy3ze4Qqe33zNdOBzC8gWAGzIOiOKu2VBmbyFbUnY7mQuQuG7hy9BuXwG3VwsAS1tpE8OKz9xjd1dQJ5v-gsL6hHPs-6V0AKTxnTfTQ2X9Wg3N5PsN3bqlR8y3jNSKNJvjRiXukvyZqdtYkLi2zVwxI1~IdCmeff~zsduUmr8Zvd8sulNP6TXr9prk1Fn8pBHGl3BtAYsMo8yyw-VLr7UI63BI~rRP4UQrmQ__' alt="" />
            </div>
            <div className=''>
              <img src='https://s3-alpha-sig.figma.com/img/9e44/8c96/2338e4a5960798f615ab671454185651?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRGEaQkB15vFQ2WmWA4pCw-~HBO5sNACbtIXoyLuNb2Km0B5aDSiVeBXRvxRHSwgjGKKQW1vw7I6KiaO-e687FGEERd0DedJLG0ki81w6MvcM9KlYZpy3ze4Qqe33zNdOBzC8gWAGzIOiOKu2VBmbyFbUnY7mQuQuG7hy9BuXwG3VwsAS1tpE8OKz9xjd1dQJ5v-gsL6hHPs-6V0AKTxnTfTQ2X9Wg3N5PsN3bqlR8y3jNSKNJvjRiXukvyZqdtYkLi2zVwxI1~IdCmeff~zsduUmr8Zvd8sulNP6TXr9prk1Fn8pBHGl3BtAYsMo8yyw-VLr7UI63BI~rRP4UQrmQ__' alt="" />
            </div>
            <div className=''>
              <img src='https://s3-alpha-sig.figma.com/img/9e44/8c96/2338e4a5960798f615ab671454185651?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRGEaQkB15vFQ2WmWA4pCw-~HBO5sNACbtIXoyLuNb2Km0B5aDSiVeBXRvxRHSwgjGKKQW1vw7I6KiaO-e687FGEERd0DedJLG0ki81w6MvcM9KlYZpy3ze4Qqe33zNdOBzC8gWAGzIOiOKu2VBmbyFbUnY7mQuQuG7hy9BuXwG3VwsAS1tpE8OKz9xjd1dQJ5v-gsL6hHPs-6V0AKTxnTfTQ2X9Wg3N5PsN3bqlR8y3jNSKNJvjRiXukvyZqdtYkLi2zVwxI1~IdCmeff~zsduUmr8Zvd8sulNP6TXr9prk1Fn8pBHGl3BtAYsMo8yyw-VLr7UI63BI~rRP4UQrmQ__' alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
