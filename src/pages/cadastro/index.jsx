import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Column, TitleCadastro, SubtitleCadastro, Text, LoginText, LinkLogin} from "./styles";

const Cadastro = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange'
    })

    return (
        <>
            <Header />
            <Container>
                <Column>
                    
                </Column>
                <Column>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form onSubmit='' >
                        <Input placeholder="Nome Completo" name="nomeCompleto" leftIcon={<MdPerson />} control={control} />
                        <Input placeholder="E-mail" name="email" type="email" leftIcon={<MdEmail />} control={control} />
                        <Input placeholder="Senha" name="password" type="password" leftIcon={<MdLock />} control={control} />
                        <Button title="Cadastrar" type="submit" variant="second" />
                    </form>
                    <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                    <LoginText>Já tenho uma conta. <LinkLogin>Fazer login!</LinkLogin></LoginText>
                </Column>
            </Container>
        </>
    );
}

export { Cadastro };