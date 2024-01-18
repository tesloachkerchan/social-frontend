import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'
function share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/persons/tesloach.jpg" alt="" className="shareProfileImg" />
                  <input placeholder='what is in your mind?' className='shareInput'/>
              </div>
              <hr className="shareHr" />
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMedia htmlColor='tomato' className='shareIcon'/>
                          <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareOption">
                          <Label htmlColor='blue' className='shareIcon'/>
                          <span className='shareOptionText'>Tags</span>
            </div>
            <div className="shareOption">
                          <Room htmlColor='green' className='shareIcon'/>
                          <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
                          <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                          <span className='shareOptionText'>Feeling</span>
            </div>
              <button className="shareButton">share</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default share
