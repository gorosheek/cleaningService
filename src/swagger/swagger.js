import swaggerAutogen from "swagger-autogen";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const generateSwagger = () => {
    const port = process.env.PORT || 3001;
    const _dirname = dirname(fileURLToPath(import.meta.url));
    const outputFile = join(_dirname, './swagger.json');
    const endpointsFiles = [join(_dirname, '../index.js')];

    const doc = {
        info: {
            title: 'cleaning service',
            description: 'Возможно, в каком-нибудь будущем тут появится какая-нибудь информация',
        },
        host: `localhost:${port}`,
        schemes: ['http', 'https'],
    };
    return swaggerAutogen(outputFile, endpointsFiles, doc);
}
export default generateSwagger;
