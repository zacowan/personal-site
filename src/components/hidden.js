import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Styled Components

const Hidden = ({ component: Component, xs, sm, md, lg, xl, style }) => {
  const RootContainer = styled(Component)`
    ${props => props.theme.breakpoints.xs} {
      display: ${xs ? `none` : `inherit`};
    }
    ${props => props.theme.breakpoints.sm} {
      display: ${sm ? `none` : `inherit`};
    }
    ${props => props.theme.breakpoints.md} {
      display: ${md ? `none` : `inherit`};
    }
    ${props => props.theme.breakpoints.lg} {
      display: ${lg ? `none` : `inherit`};
    }
    ${props => props.theme.breakpoints.xl} {
      display: ${xl ? `none` : `inherit`};
    }
  `
  return <RootContainer style={style} />
}

Hidden.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
}

Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
}

export default Hidden
