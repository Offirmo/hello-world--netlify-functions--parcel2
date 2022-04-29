import { capitalize } from 'lodash'

import {
	APIGatewayEvent,
	Context,
	NetlifyContext,
	Response,
	NetlifyHandler,
} from './sub/types'

////////////////////////////////////

const handler: NetlifyHandler = async (
	event: APIGatewayEvent,
	badly_typed_context: Context,
): Promise<Response> => {
	const msg = `Hello from ${capitalize('netlify alt')}!`
	console.log('(console.log)', msg)
	console.info('(console.info)', msg)
	console.warn('(console.warn)', msg)
	console.error('(console.error)', msg)

	return {
		statusCode: 200,
		headers: {},
		body: msg,
	}
}

export { handler }
