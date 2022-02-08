import { ParseInt } from '../../common/decorators/parsers.decorator';
import { RequestOptions } from '../../common/requests/request.options';

const DEFAULT_TAKE_VALUE = 20;

export class FetchUsersRequestDto implements RequestOptions {

    @ParseInt()
    skip?: number;

    @ParseInt(DEFAULT_TAKE_VALUE)
    take?: number;

    @ParseInt()
    customerId?: number;
}
