import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'd20867a1-2772-455a-bd6b-fcf2214d5144',
    props.user.username,
    props.user.secret,
  )
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'  }}  />
    </div>
  )
}
export default ChatsPage
