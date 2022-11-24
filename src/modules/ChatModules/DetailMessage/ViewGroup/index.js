import React from 'react'
import { listMessage } from '../data'
import { groupMember } from './data'
import Image from 'next/image'
import * as S from './styles'
import User from './User'

function ViewGroup(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Back onClick={props.toggle}>
          <Image
            src="/images/icons/back-chat.png"
            width={8}
            height={18}
            alt="back"
          />
          Back
        </S.Back>
        <div>Edit</div>
      </S.Header>
      <div>
        <S.Avatar>
          <Image
            src={
              listMessage[props?.id - 1].avatar
                ? listMessage[props?.id - 1].avatar
                : '/images/icons/default-avatar.png'
            }
            width={71}
            height={71}
            alt="avatar"
          />
        </S.Avatar>
        <S.UserName>{listMessage[props?.id - 1].user}</S.UserName>
        <S.AddressWallet>
          <div>0x8F2985739d3...63cBA2e3</div>
          <S.Copy>
            <Image
              src="/images/icons/copy.png"
              width={16}
              height={20}
              alt="cpy"
            />
          </S.Copy>
        </S.AddressWallet>
        <S.Price>
          <div>$250,000.00</div>
          <S.Refresh>
            <Image
              src="/images/icons/refresh.png"
              width={15}
              height={18}
              alt="cpy"
            />
          </S.Refresh>
        </S.Price>
        <S.ListButton>
          <S.Button>
            <div>
              <Image
                src="/images/icons/mute.png"
                width={17}
                height={20}
                alt="mute"
              />
            </div>
            <div>mute</div>
          </S.Button>
          <S.Button>
            <div>
              <Image
                src="/images/icons/search-view-group.png"
                width={22}
                height={22}
                alt="search"
              />
            </div>
            <div>search</div>
          </S.Button>
          <S.Button>
            <div>
              <Image
                src="/images/icons/edit.png"
                width={20}
                height={20}
                alt="search"
              />
            </div>
            <div>post</div>
          </S.Button>
          <S.Button>
            <div>
              <Image
                src="/images/icons/event.png"
                width={15}
                height={25}
                alt="event"
              />
            </div>
            <div>event</div>
          </S.Button>
          <S.Button>
            <div>
              <Image
                src="/images/icons/leave.png"
                width={24}
                height={21.5}
                alt="leave"
              />
            </div>
            <div>leave</div>
          </S.Button>
        </S.ListButton>
      </div>
      <S.BoxDescription>
        <S.ShareLink>
          <div>share link</div>
          <S.Link>
            @dmessagea sdsa das da das das as dasd asd asd asd asd asd asd as d
            dasd asd
          </S.Link>
        </S.ShareLink>
        <div>
          <div>description</div>
          <S.Des>
            Consec adipiscing elit, sed do eiusmod tempor eiu sm od incididunt
            labore et dolore magna
          </S.Des>
        </div>
      </S.BoxDescription>
      <div>
        <S.ListInfor>
          <div>Assets</div>
          <div>Transactions</div>
          <div>Links</div>
          <div>Media</div>
          <div>File</div>
        </S.ListInfor>
        <S.ListMember>
          {groupMember.map(member => (
            <User user={member} key={member.id} />
          ))}
        </S.ListMember>
      </div>
    </S.Wrapper>
  )
}

export default ViewGroup
