import { Download } from "src/entities/download.entity";
import { Faq } from "src/entities/faq.entity";
import { PaymentMethod } from "src/entities/payment.method.entity";
import { Subscription } from "src/entities/subscription.entity";
import { Template } from "src/entities/template.entity";
import { User } from "src/entities/user.entity";
import { UserQuestion } from "src/entities/userquestion.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config : PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'awt',
    entities: [User, Template,Subscription, PaymentMethod,Faq,UserQuestion,Download],
    synchronize: true
}

export default config;