import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Column, TitleCadastro, SubtitleCadastro, Text, LoginText, LinkLogin, TextCadastro} from "./styles";

const Cadastro = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate("/login")
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange'
    })

    const onSubmit = async formData  => {
        try {
            await api.post("/users", {
                nome: formData.name,
                email: formData.email,
                senha: formData.password

            })
            .then(respose => {
                console.log(respose)
                navigate("/login")
            })
            .then(error => console.error(error))
            
        } catch (error) {
            console.log('erro ao enviar: ', error)
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <TextCadastro>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</TextCadastro>
                </Column>
                <Column>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input placeholder="Nome Completo" name="name" leftIcon={<MdPerson />} control={control} />
                        {errors.name && <span>O Nome é obrigatório</span>}

                        <Input placeholder="E-mail" name="email" type="email" leftIcon={<MdEmail />} control={control} />
                        {errors.email && <span>O E-mail é obrigatório</span>}
                        
                        <Input placeholder="Senha" name="password" type="password" leftIcon={<MdLock />} control={control} />
                        {errors.password && <span>A senha é obrigatório</span>}

                        <Button title="Cadastrar" type="submit" variant="second" />
                    </form>
                    <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                    <LoginText>Já tenho uma conta. <LinkLogin onClick={handleNavigateLogin}>Fazer login!</LinkLogin></LoginText>
                </Column>
            </Container>
        </>
    );
}

export { Cadastro };