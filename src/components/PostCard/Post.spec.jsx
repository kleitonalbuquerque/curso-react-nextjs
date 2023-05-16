/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from "./mock"

const props = postCardPropsMock

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover)
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByText('body 1')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})