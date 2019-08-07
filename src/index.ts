/**
 * Antes de começar:
 * yarn install
 * 
 * Como executar:
 * yarn start | less
 * 
 */
import * as fs from 'fs';

const config = {
    stackName: 'fusionQA',
    redis: {
        instances: 4,
        slaves: 3,
        password: 'poneisSaoParaMeninas',
        ports: {
            start: 8001,
        },
    },
    mongo: {
        instances: 4,
        database: 'core',
        user: 'root',
        password: 'queriaAndarNumAvestruz',
    },
    postgres: {
        database: 'usign',
        username: 'postgres',
        password: 'euNuncaTiveUmUrso',
    },
    site: {
        traefik: {
            url: 'alpha.usign.io',
        },
    },
    api: {
        jwt: 'meusAnimaisNaoVoam',
    },
    smtp: {
        user: 'no-reply@jbtec.com.br',
        password: 'seVoassemSeriamPassaros',
        host: 'smtp.gmail.com',
        port: 465,
    },
};

interface KeyPair {
    key: string;
    value: string;
}

const flattenConfig = () => {
    const data: KeyPair[] = [
        { key: 'stackName', value: 'fusionQA' },
        { key: 'redis.password', value: 'poneisSaoParaMeninas' }
    ];
    return data;
};

const main = () => {
    let content = fs.readFileSync('stack.yaml').toString();
    const replaces = flattenConfig();

    /** Substitui todas as constantes e variaveis */
    replaces.forEach(v => {
        content = content
            .replace(new RegExp(`"##!!!${v.key}!!!##"`, 'g'), v.value)
            .replace(new RegExp(`##!!!${v.key}!!!##`, 'g'), v.value)
            .replace(new RegExp(`!!!${v.key}!!!`, 'g'), v.value);
    });
    console.log(content); // eslint-disable-line
};

main();
