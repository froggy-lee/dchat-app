import React, { useState, useCallback } from 'react'
import * as S from './styles'
import { CameraIcon } from '/public/svgs'
import Image from 'next/image'
import { showCreateGroupStep2Action } from '/src/store/slice/modal'
import { useDispatch } from 'react-redux'

const fakeData = [
  { id: 1, avatar: '', name: 'Yack John' },
  { id: 2, avatar: '', name: 'Yack John' },
  { id: 3, avatar: '', name: 'Yack John' }
]

const CreateStepSecond = () => {
  const [preview, setPreview] = useState(null)
  const [value, setValue] = useState('')

  const valueLength = value.length

  const dispatch = useDispatch()

  const getAvatar = useCallback(img => {
    setPreview(img)
  }, [])

  const onFileChange = useCallback(
    event => {
      const file = event.target.files[0]
      const objectUrl = URL.createObjectURL(file)
      getAvatar(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    },
    [getAvatar]
  )

  const onInputChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  const HandleCloseStep2 = () => {
    dispatch(showCreateGroupStep2Action(false))
  }

  const handleOpenStep2 = useCallback(() => {
    dispatch(showCreateGroupStep2Action(true))
  }, [dispatch])

  return (
    <S.StepSecond>
      <S.Header>
        <S.Back onClick={HandleCloseStep2}>
          <S.IconBack>
            <Image
              src="/images/icons/back-chat.png"
              width="8"
              height="18"
              alt="back"
            />
          </S.IconBack>
          Back
        </S.Back>
        <S.TitleWrapper>
          <S.Title>New Group</S.Title>
        </S.TitleWrapper>
        {valueLength > 0 ? (
          <S.Create onClick={handleOpenStep2}>Create</S.Create>
        ) : (
          <S.Next>Create</S.Next>
        )}
      </S.Header>

      <S.ChangeImage>
        <S.ButtonAvatar>
          <input type="file" name="photo" id="upload" onChange={onFileChange} />

          {preview ? (
            <S.Preview>
              <Image
                src={preview}
                layout="fill"
                alt="preview-avatar"
                objectFit="cover"
              />
            </S.Preview>
          ) : (
            <label htmlFor="upload" className="upload-button">
              <div className="icon">
                <CameraIcon />
              </div>
            </label>
          )}
        </S.ButtonAvatar>

        <S.InputWrapper>
          <input
            type="text"
            placeholder="Group Name"
            value={value}
            name="group-name"
            onChange={onInputChange}
          />
        </S.InputWrapper>
      </S.ChangeImage>

      <S.ListMember>
        {fakeData.map(data => (
          <S.Member key={data.id}>
            <S.Avatar>
              <Image
                src={data.avatar || '/images/icons/default-avatar.png'}
                width={40}
                height={40}
                alt="info-avatar"
              />
            </S.Avatar>
            <S.Info>
              <S.Name>{data.name || 'Default name'}</S.Name>
              <S.LastSeen>last seen 25 minutes ago</S.LastSeen>
            </S.Info>
          </S.Member>
        ))}
      </S.ListMember>
    </S.StepSecond>
  )
}

export default CreateStepSecond
