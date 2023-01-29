import Image from 'next/image'

import user from '../../public/pharell.jpg'
import * as S from './styles'

const Avatar = ({ size = 'xlarge' }) => (
	<S.Wrapper size={size}>
		<Image src={user} fill alt='username' />
	</S.Wrapper>
)

export default Avatar