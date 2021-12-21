import { Component, Mut, VueComponent } from 'vue3-oop'
import { UserService } from '@/auth/user.service'
import { Button, Col, Form, Input, Row } from 'ant-design-vue'
import { SkipSelf } from 'injection-js'

interface LoginModel {
  name: string
  pwd: string
}

@Component()
export default class LoginView extends VueComponent {
  constructor(@SkipSelf() private userService: UserService) {
    super()
  }
  @Mut() model: Partial<LoginModel> = {}
  render() {
    return (
      <Row type={'flex'} justify={'center'}>
        <Col span={12}>
          <h3 style={{ textAlign: 'center' }}>登录</h3>
          <Form onSubmit={() => this.userService.login()}>
            <Form.Item label={'名称'}>
              <Input v-model:value={this.model.name}></Input>
            </Form.Item>
            <Form.Item label={'密码'}>
              <Input v-model:value={this.model.pwd}></Input>
            </Form.Item>
            <Form.Item>
              <Button type={'primary'} block htmlType={'submit'}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}
