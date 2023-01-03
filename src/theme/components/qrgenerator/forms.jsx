import { useState } from 'react'
import '../../web/css/src/components/_forms.less'

const FormsGenerator = () => {
  const API_URL = 'https://qrtag.net/api/qr_transparent'

  const [url, setUrl] = useState({
    base: '',
  })
  const [type, setType] = useState({
    base: 'png',
  })

  const setUrlValue = (e) => {
    setUrl({
      ...url,
      base: e.target.value,
    })
  }

  const setTypeValue = (e) => {
    setType({
      ...type,
      base: e.target.value,
    })
  }

  return (
    <>
      <div className='qrgenerator'>
        <img src={`${API_URL}.${type.base}?url=${url.base}`} alt='Qrtag' />
      </div>
      <form>
        <label>
          URL:
          <input
            type='url'
            name='url'
            value={url.base}
            onChange={setUrlValue}
            required
          />
        </label>
        <label>
          Formato:
          <select
            name='type'
            defaultValue='Png'
            onChange={setTypeValue}
            value={type.base}
            required>
            <option value='png'>Png</option>
            <option value='svg'>Svg</option>
          </select>
        </label>
      </form>
    </>
  )
}

export default FormsGenerator
